import { Icon, IconProps } from '@chakra-ui/react';
import OneLogo from 'assets/svg/currencies/crypto/ONE.svg';

interface HarmonyIconProps extends IconProps {
  color?: string;
  fill?: string;
}

export const HarmonyIcon = ({
                               width = '24px',
                               height = '24px',
                               color = 'white',
                               fill = '#627EEA',
                             }: HarmonyIconProps) => {
  return (
    <Icon width={width} height={height} viewBox="0 0 34 34" fill="none">
      <OneLogo />
    </Icon>
  );
};
