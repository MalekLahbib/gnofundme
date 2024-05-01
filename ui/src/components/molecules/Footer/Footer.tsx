import { FC } from 'react';
import { IFooterProps, IFooterSocial } from './footer.types.ts';
import { BsDiscord, BsGithub, BsTelegram, BsTwitterX } from 'react-icons/bs';

const Footer: FC<IFooterProps> = () => {
  // const [isMdOrSmaller] = useMediaQuery('(max-width: 62em)');

  const footerSocials: IFooterSocial[] = [
    {
      name: 'Discord',
      link: 'https://discord.gg/YFtMjWwUN7',
      icon: <BsDiscord />
    },
    {
      name: 'GitHub',
      link: 'https://github.com/gnolang/gno',
      icon: <BsGithub />
    },
    {
      name: 'X',
      link: 'https://twitter.com/_gnoland',
      icon: <BsTwitterX />
    },
    {
      name: 'Telegram',
      link: 'https://t.me/gnoland',
      icon: <BsTelegram />
    }
  ];

  return (
    <div className='flex w-screen absolute bottom-0 right-0 bg-grey-400 justify-center'>Footer</div>
    // <Box
    //   display={'flex'}
    //   backgroundColor={'white'}
    //   width={isMdOrSmaller ? '70vw' : '20vw'}
    //   className={'box'}
    //   justifyContent={'space-between'}
    //   alignItems={'center'}
    // >
    //   {footerSocials.map((social: IFooterSocial, index: number) => {
    //     return (
    //       <Link key={index} href={social.link} isExternal>
    //         <IconButton
    //           aria-label={social.name}
    //           variant={'buttonPrimary'}
    //           icon={social.icon}
    //         />
    //       </Link>
    //     );
    //   })}
    // </Box>
  );
};

export default Footer;
