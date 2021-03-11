import { FC, useState, useMemo, useEffect, useCallback } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ethers } from 'ethers';
import { Svg } from 'react-optimized-image';
import { useRecoilValue } from 'recoil';
import BigNumber from 'bignumber.js';

import { appReadyState } from 'store/app';
import StructuredTab from 'components/StructuredTab';
import { FlexDivCentered, FlexDivColCentered, ExternalLink, FlexDiv } from 'styles/common';
import { CurrencyKey } from 'constants/currency';
import Etherscan from 'containers/Etherscan';
import useExchangeRatesQuery from 'queries/rates/useExchangeRatesQuery';
import PendingConfirmation from 'assets/svg/app/pending-confirmation.svg';
import Success from 'assets/svg/app/success.svg';
import { Transaction } from 'constants/network';
import { normalizedGasPrice } from 'utils/network';
import { CryptoCurrency, Synths } from 'constants/currency';
import { getGasEstimateForTransaction } from 'utils/transactions';
import { formatNumber } from 'utils/formatters/number';
import { DEFAULT_CRYPTO_DECIMALS } from 'constants/defaults';

import Connector from 'containers/Connector';
import Notify from 'containers/Notify';
import TxState from 'sections/earn/TxState';
import { EXTERNAL_LINKS } from 'constants/links';

import StakeTab from './StakeTab';
import Approve from './Approve';
import Settle from './Settle';
import RewardsBox from './RewardsBox';
import { getContract } from './StakeTab/StakeTab';

import {
	StyledLink,
	GreyHeader,
	WhiteSubheader,
	Divider,
	VerifyButton,
	DismissButton,
	ButtonSpacer,
	GreyText,
	LinkText,
	TabContainer,
	Label,
	HeaderLabel,
} from '../common';

import { LP } from 'sections/earn/types';
import styled from 'styled-components';

type DualRewards = {
	a: number;
	b: number;
};

type LPTabProps = {
	stakedAsset: CurrencyKey;
	tokenRewards: number | DualRewards;
	allowance: number | null;
	userBalance: number;
	userBalanceBN: BigNumber;
	staked: number;
	stakedBN: BigNumber;
	needsToSettle?: boolean;
};

const LPTab: FC<LPTabProps> = ({
	stakedAsset,
	tokenRewards,
	allowance,
	userBalance,
	userBalanceBN,
	staked,
	stakedBN,
	needsToSettle,
}) => {
	const { t } = useTranslation();
	const { signer } = Connector.useContainer();
	const { monitorHash } = Notify.useContainer();
	const [showApproveOverlayModal, setShowApproveOverlayModal] = useState<boolean>(false);
	const [showSettleOverlayModal, setShowSettleOverlayModal] = useState<boolean>(false);

	const isAppReady = useRecoilValue(appReadyState);

	const [claimGasPrice, setClaimGasPrice] = useState<number>(0);
	const [claimTransactionState, setClaimTransactionState] = useState<Transaction>(
		Transaction.PRESUBMIT
	);
	const [claimTxHash, setClaimTxHash] = useState<string | null>(null);
	const [claimError, setClaimError] = useState<string | null>(null);
	const [claimTxModalOpen, setClaimTxModalOpen] = useState<boolean>(false);

	const { etherscanInstance } = Etherscan.useContainer();
	const claimLink =
		etherscanInstance != null && claimTxHash != null
			? etherscanInstance.txLink(claimTxHash)
			: undefined;

	const exchangeRatesQuery = useExchangeRatesQuery();
	const SNXRate = exchangeRatesQuery.data?.SNX ?? 0;

	const tabData = useMemo(() => {
		const commonStakeTabProps = {
			stakedAsset,
			userBalance,
			userBalanceBN,
			staked,
			stakedBN,
		};

		return [
			{
				title: t('earn.actions.stake.title'),
				tabChildren: <StakeTab {...commonStakeTabProps} isStake={true} />,
				blue: true,
				key: 'stake',
			},
			{
				title: t('earn.actions.unstake.title'),
				tabChildren: <StakeTab {...commonStakeTabProps} isStake={false} />,
				blue: false,
				key: 'unstake',
			},
		];
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [t, stakedAsset, userBalance, staked]);

	useEffect(() => {
		if (allowance === 0 && userBalance > 0) {
			setShowApproveOverlayModal(true);
		}
	}, [allowance, userBalance]);

	useEffect(() => {
		if (needsToSettle) {
			setShowSettleOverlayModal(true);
		}
	}, [needsToSettle]);

	const handleClaim = useCallback(() => {
		async function claim() {
			if (isAppReady) {
				try {
					setClaimError(null);
					setClaimTxModalOpen(true);
					const contract = getContract(stakedAsset, signer);

					const gasLimit = await getGasEstimateForTransaction([], contract.estimateGas.getReward);
					const transaction: ethers.ContractTransaction = await contract.getReward({
						gasPrice: normalizedGasPrice(claimGasPrice),
						gasLimit,
					});

					if (transaction) {
						setClaimTxHash(transaction.hash);
						setClaimTransactionState(Transaction.WAITING);
						monitorHash({
							txHash: transaction.hash,
							onTxConfirmed: () => setClaimTransactionState(Transaction.SUCCESS),
						});
						setClaimTxModalOpen(false);
					}
				} catch (e) {
					setClaimTransactionState(Transaction.PRESUBMIT);
					setClaimError(e.message);
				}
			}
		}
		claim();
	}, [stakedAsset, signer, claimGasPrice, monitorHash, isAppReady]);

	const translationKey = useMemo(() => {
		if (stakedAsset === Synths.iETH) {
			return 'earn.incentives.options.ieth.description';
		} else if (stakedAsset === Synths.iBTC) {
			return 'earn.incentives.options.ibtc.description';
		} else if (stakedAsset === LP.CURVE_sUSD) {
			return 'earn.incentives.options.curve.description';
		} else if (stakedAsset === LP.CURVE_sEURO) {
			return 'earn.incentives.options.seur.description';
		} else if (stakedAsset === LP.BALANCER_sTSLA) {
			return 'earn.incentives.options.stsla.description';
		} else if (stakedAsset === LP.UNISWAP_DHT) {
			return 'earn.incentives.options.dht.description';
		} else {
			throw new Error('unexpected staking asset for translation key');
		}
	}, [stakedAsset]);

	const DualRewardsClaimInfo = (
		<StyledFlexDiv>
			<StyledFlexDivColCentered>
				<GreyHeader>{t('earn.actions.claim.claiming')}</GreyHeader>
				<WhiteSubheader>
					{t('earn.actions.claim.amount', {
						amount: formatNumber((tokenRewards as DualRewards).a, {
							decimals: DEFAULT_CRYPTO_DECIMALS,
						}),
						asset: CryptoCurrency.SNX,
					})}
				</WhiteSubheader>
			</StyledFlexDivColCentered>
			<StyledFlexDivColCentered>
				<GreyHeader>{t('earn.actions.claim.claiming')}</GreyHeader>
				<WhiteSubheader>
					{t('earn.actions.claim.amount', {
						amount: formatNumber((tokenRewards as DualRewards).b, {
							decimals: DEFAULT_CRYPTO_DECIMALS,
						}),
						asset: CryptoCurrency.DHT,
					})}
				</WhiteSubheader>
			</StyledFlexDivColCentered>
		</StyledFlexDiv>
	);

	if (claimTransactionState === Transaction.WAITING) {
		return (
			<TxState
				description={
					<Label>
						<Trans
							i18nKey={translationKey}
							components={[<StyledLink href={EXTERNAL_LINKS.Synthetix.Incentives} />]}
						/>
					</Label>
				}
				title={t('earn.actions.rewards.waiting')}
				content={
					<FlexDivColCentered>
						<Svg src={PendingConfirmation} />
						{stakedAsset === LP.UNISWAP_DHT ? (
							DualRewardsClaimInfo
						) : (
							<>
								<GreyHeader>{t('earn.actions.claim.claiming')}</GreyHeader>
								<WhiteSubheader>
									{t('earn.actions.claim.amount', {
										amount: formatNumber(tokenRewards as number, {
											decimals: DEFAULT_CRYPTO_DECIMALS,
										}),
										asset: CryptoCurrency.SNX,
									})}
								</WhiteSubheader>
							</>
						)}
						<Divider />
						<GreyText>{t('earn.actions.tx.notice')}</GreyText>
						<ExternalLink href={claimLink}>
							<LinkText>{t('earn.actions.tx.link')}</LinkText>
						</ExternalLink>
					</FlexDivColCentered>
				}
			/>
		);
	}

	if (claimTransactionState === Transaction.SUCCESS) {
		return (
			<TxState
				description={
					<Label>
						<Trans
							i18nKey={translationKey}
							components={[<StyledLink href={EXTERNAL_LINKS.Synthetix.Incentives} />]}
						/>
					</Label>
				}
				title={t('earn.actions.claim.success')}
				content={
					<FlexDivColCentered>
						<Svg src={Success} />
						{stakedAsset === LP.UNISWAP_DHT ? (
							DualRewardsClaimInfo
						) : (
							<>
								<GreyHeader>{t('earn.actions.claim.claiming')}</GreyHeader>
								<WhiteSubheader>
									{t('earn.actions.claim.amount', {
										amount: formatNumber(tokenRewards as number, {
											decimals: DEFAULT_CRYPTO_DECIMALS,
										}),
										asset: CryptoCurrency.SNX,
									})}
								</WhiteSubheader>
							</>
						)}
						<Divider />
						<ButtonSpacer>
							{claimLink ? (
								<ExternalLink href={claimLink}>
									<VerifyButton>{t('earn.actions.tx.verify')}</VerifyButton>
								</ExternalLink>
							) : null}
							<DismissButton
								variant="secondary"
								onClick={() => setClaimTransactionState(Transaction.PRESUBMIT)}
							>
								{t('earn.actions.tx.dismiss')}
							</DismissButton>
						</ButtonSpacer>
					</FlexDivColCentered>
				}
			/>
		);
	}

	const getLink = () => {
		switch (stakedAsset) {
			case LP.BALANCER_sTSLA:
				return `https://pools.balancer.exchange/#/pool/0x055db9aff4311788264798356bbf3a733ae181c6/`;
			case LP.UNISWAP_DHT:
				return `https://uniswap.exchange/add/0x57ab1ec28d129707052df4df418d58a2d46d5f51/0xca1207647ff814039530d7d35df0e1dd2e91fa84`;
			default:
				return EXTERNAL_LINKS.Synthetix.Incentives;
		}
	};

	return (
		<TabContainer>
			<HeaderLabel>
				<Trans i18nKey={translationKey} components={[<StyledLink href={getLink()} />]} />
			</HeaderLabel>
			{stakedAsset === LP.UNISWAP_DHT ? (
				<>
					<StructuredTab
						tabHeight={30}
						inverseTabColor={true}
						boxPadding={0}
						boxHeight={242}
						boxWidth={512}
						tabData={tabData}
					/>
					<RewardsBox
						setClaimGasPrice={setClaimGasPrice}
						claimTxModalOpen={claimTxModalOpen}
						setClaimTxModalOpen={setClaimTxModalOpen}
						handleClaim={handleClaim}
						claimError={claimError}
						setClaimError={setClaimError}
						stakedAsset={stakedAsset}
						tokenRewards={(tokenRewards as DualRewards).a}
						SNXRate={SNXRate}
						secondTokenReward={(tokenRewards as DualRewards).b}
						secondTokenKey={CryptoCurrency.DHT}
					/>
				</>
			) : (
				<FlexDivCentered>
					<StructuredTab
						tabHeight={30}
						inverseTabColor={true}
						boxPadding={0}
						boxHeight={242}
						boxWidth={310}
						tabData={tabData}
					/>
					<RewardsBox
						setClaimGasPrice={setClaimGasPrice}
						claimTxModalOpen={claimTxModalOpen}
						setClaimTxModalOpen={setClaimTxModalOpen}
						handleClaim={handleClaim}
						claimError={claimError}
						setClaimError={setClaimError}
						stakedAsset={stakedAsset}
						tokenRewards={tokenRewards as number}
						SNXRate={SNXRate}
					/>
				</FlexDivCentered>
			)}
			{showApproveOverlayModal && (
				<Approve
					setShowApproveOverlayModal={setShowApproveOverlayModal}
					stakedAsset={stakedAsset}
				/>
			)}
			{showSettleOverlayModal && (
				<Settle setShowSettleOverlayModal={setShowSettleOverlayModal} stakedAsset={stakedAsset} />
			)}
		</TabContainer>
	);
};

const StyledFlexDivColCentered = styled(FlexDivColCentered)`
	padding: 20px 30px;
	&:first-child {
		border-right: 1px solid ${(props) => props.theme.colors.grayBlue};
	}
`;

const StyledFlexDiv = styled(FlexDiv)`
	margin-bottom: -20px;
`;

export default LPTab;
