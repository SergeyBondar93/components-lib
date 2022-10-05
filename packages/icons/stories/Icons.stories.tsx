/* eslint-disable  */ 
import { AccountIcon } from "../src/AccountIcon";
import { AlertCircleIcon } from "../src/AlertCircleIcon";
import { AlertIcon } from "../src/AlertIcon";
import { AlfaIcon } from "../src/AlfaIcon";
import { BasketIcon } from "../src/BasketIcon";
import { BlogArt } from "../src/BlogArt";
import { CalendarIcon } from "../src/CalendarIcon";
import { CallIcon } from "../src/CallIcon";
import { CarIcon } from "../src/CarIcon";
import { CheckIcon } from "../src/CheckIcon";
import { CheIconFooter } from "../src/CheIconFooter";
import { CherehapaLogoIcon } from "../src/CherehapaLogoIcon";
import { ChevronIcon } from "../src/ChevronIcon";
import { ChevronIconCalendar } from "../src/ChevronIconCalendar";
import { ChevronUpIcon } from "../src/ChevronUpIcon";
import { CircleArrow } from "../src/CircleArrow";
import { CircleArrowArt } from "../src/CircleArrowArt";
import { CirclePlusIcon } from "../src/CirclePlusIcon";
import { CircleQuestionMarkIcon } from "../src/CircleQuestionMarkIcon";
import { CloseIcon } from "../src/CloseIcon";
import { CommandIcon } from "../src/CommandIcon";
import { CompareCheckedIcon } from "../src/CompareCheckedIcon";
import { CompareUncheckedIcon } from "../src/CompareUncheckedIcon";
import { Cones } from "../src/Cones";
import { CrossIcon } from "../src/CrossIcon";
import { DeleteIcon } from "../src/DeleteIcon";
import { DocumentIcon } from "../src/DocumentIcon";
import { DownloadIcon } from "../src/DownloadIcon";
import { EditIcon } from "../src/EditIcon";
import { ExportIcon } from "../src/ExportIcon";
import { FiguredArrowArt } from "../src/FiguredArrowArt";
import { Flourish } from "../src/Flourish";
import { Foots } from "../src/Foots";
import { HomeIcon } from "../src/HomeIcon";
import { House } from "../src/House";
import { InfoIcon } from "../src/InfoIcon";
import { IngosstrahIcon } from "../src/IngosstrahIcon";
import { JCBIcon } from "../src/JCBIcon";
import { MastercardIcon } from "../src/MastercardIcon";
import { MenuIcon } from "../src/MenuIcon";
import { MirIcon } from "../src/MirIcon";
import { MoonIcon } from "../src/MoonIcon";
import { NavArrowIcon } from "../src/NavArrowIcon";
import { NextStepArrowIcon } from "../src/NextStepArrowIcon";
import { PCIIcon } from "../src/PCIIcon";
import { PenIcon } from "../src/PenIcon";
import { PhoneIcon } from "../src/PhoneIcon";
import { PlaneIcon } from "../src/PlaneIcon";
import { RenessansIcon } from "../src/RenessansIcon";
import { ResoIcon } from "../src/ResoIcon";
import { RSTIcon } from "../src/RSTIcon";
import { SendIcon } from "../src/SendIcon";
import { SettingsIcon } from "../src/SettingsIcon";
import { ShareTelegramLogo } from "../src/ShareTelegramLogo";
import { ShareVKLogo } from "../src/ShareVKLogo";
import { ShareWhatsAppLogo } from "../src/ShareWhatsAppLogo";
import { SplashArt } from "../src/SplashArt";
import { StarArt } from "../src/StarArt";
import { TelegramIcon } from "../src/TelegramIcon";
import { TinkoffIcon } from "../src/TinkoffIcon";
import { TriangleIcon } from "../src/TriangleIcon";
import { TwitterIcon } from "../src/TwitterIcon";
import { VisaIcon } from "../src/VisaIcon";
import { VKIcon } from "../src/VKIcon";
import { WalletIcon } from "../src/WalletIcon";
import { WarnTriagleIcon } from "../src/WarnTriagleIcon";
import { WhatsupIcon } from "../src/WhatsupIcon";

import { useCopyToClipboard } from "react-use";
import { CSSProperties, ReactNode } from "react";

export default {
  title: "Icons",
};

interface IIconWrapperProps {
  icon: ReactNode;
  iconName: string;
}

const wrapperStyles = {
  padding: "8px",
  textAlign: "center",
  verticalAlign: "center",
  border: "1px solid black",
} as CSSProperties;

const marginStyles = { margin: "0px 10px" };

const IconWrapper = ({ icon, iconName }: IIconWrapperProps) => {
  const [, copyToClipboard] = useCopyToClipboard();

  const importString = `import { ${iconName} } from "@cheaaa/icons/${iconName}"`;

  return (
    <tr>
      <td style={wrapperStyles}>{icon}</td>

      <td style={wrapperStyles}>
        <span style={marginStyles}>
          name:{" "}
          <b>
            <i>{iconName}</i>
          </b>
        </span>
      </td>

      <td style={wrapperStyles}>
        <button style={marginStyles} onClick={() => copyToClipboard(iconName)}>
          {" "}
          Copy name{" "}
        </button>
      </td>

      <td style={wrapperStyles}>
        <button
          style={marginStyles}
          onClick={() => copyToClipboard(importString)}
        >
          {" "}
          Copy import{" "}
        </button>
      </td>
    </tr>
  );
};

export const Icons = () => {
  return (
    <table style={{ borderCollapse: "collapse" }}>
       <IconWrapper icon={<AccountIcon />} iconName="AccountIcon" />
 <IconWrapper icon={<AlertCircleIcon />} iconName="AlertCircleIcon" />
 <IconWrapper icon={<AlertIcon />} iconName="AlertIcon" />
 <IconWrapper icon={<AlfaIcon />} iconName="AlfaIcon" />
 <IconWrapper icon={<BasketIcon />} iconName="BasketIcon" />
 <IconWrapper icon={<BlogArt />} iconName="BlogArt" />
 <IconWrapper icon={<CalendarIcon />} iconName="CalendarIcon" />
 <IconWrapper icon={<CallIcon />} iconName="CallIcon" />
 <IconWrapper icon={<CarIcon />} iconName="CarIcon" />
 <IconWrapper icon={<CheckIcon />} iconName="CheckIcon" />
 <IconWrapper icon={<CheIconFooter />} iconName="CheIconFooter" />
 <IconWrapper icon={<CherehapaLogoIcon />} iconName="CherehapaLogoIcon" />
 <IconWrapper icon={<ChevronIcon />} iconName="ChevronIcon" />
 <IconWrapper icon={<ChevronIconCalendar />} iconName="ChevronIconCalendar" />
 <IconWrapper icon={<ChevronUpIcon />} iconName="ChevronUpIcon" />
 <IconWrapper icon={<CircleArrow />} iconName="CircleArrow" />
 <IconWrapper icon={<CircleArrowArt />} iconName="CircleArrowArt" />
 <IconWrapper icon={<CirclePlusIcon />} iconName="CirclePlusIcon" />
 <IconWrapper icon={<CircleQuestionMarkIcon />} iconName="CircleQuestionMarkIcon" />
 <IconWrapper icon={<CloseIcon />} iconName="CloseIcon" />
 <IconWrapper icon={<CommandIcon />} iconName="CommandIcon" />
 <IconWrapper icon={<CompareCheckedIcon />} iconName="CompareCheckedIcon" />
 <IconWrapper icon={<CompareUncheckedIcon />} iconName="CompareUncheckedIcon" />
 <IconWrapper icon={<Cones />} iconName="Cones" />
 <IconWrapper icon={<CrossIcon />} iconName="CrossIcon" />
 <IconWrapper icon={<DeleteIcon />} iconName="DeleteIcon" />
 <IconWrapper icon={<DocumentIcon />} iconName="DocumentIcon" />
 <IconWrapper icon={<DownloadIcon />} iconName="DownloadIcon" />
 <IconWrapper icon={<EditIcon />} iconName="EditIcon" />
 <IconWrapper icon={<ExportIcon />} iconName="ExportIcon" />
 <IconWrapper icon={<FiguredArrowArt />} iconName="FiguredArrowArt" />
 <IconWrapper icon={<Flourish />} iconName="Flourish" />
 <IconWrapper icon={<Foots />} iconName="Foots" />
 <IconWrapper icon={<HomeIcon />} iconName="HomeIcon" />
 <IconWrapper icon={<House />} iconName="House" />
 <IconWrapper icon={<InfoIcon />} iconName="InfoIcon" />
 <IconWrapper icon={<IngosstrahIcon />} iconName="IngosstrahIcon" />
 <IconWrapper icon={<JCBIcon />} iconName="JCBIcon" />
 <IconWrapper icon={<MastercardIcon />} iconName="MastercardIcon" />
 <IconWrapper icon={<MenuIcon />} iconName="MenuIcon" />
 <IconWrapper icon={<MirIcon />} iconName="MirIcon" />
 <IconWrapper icon={<MoonIcon />} iconName="MoonIcon" />
 <IconWrapper icon={<NavArrowIcon />} iconName="NavArrowIcon" />
 <IconWrapper icon={<NextStepArrowIcon />} iconName="NextStepArrowIcon" />
 <IconWrapper icon={<PCIIcon />} iconName="PCIIcon" />
 <IconWrapper icon={<PenIcon />} iconName="PenIcon" />
 <IconWrapper icon={<PhoneIcon />} iconName="PhoneIcon" />
 <IconWrapper icon={<PlaneIcon />} iconName="PlaneIcon" />
 <IconWrapper icon={<RenessansIcon />} iconName="RenessansIcon" />
 <IconWrapper icon={<ResoIcon />} iconName="ResoIcon" />
 <IconWrapper icon={<RSTIcon />} iconName="RSTIcon" />
 <IconWrapper icon={<SendIcon />} iconName="SendIcon" />
 <IconWrapper icon={<SettingsIcon />} iconName="SettingsIcon" />
 <IconWrapper icon={<ShareTelegramLogo />} iconName="ShareTelegramLogo" />
 <IconWrapper icon={<ShareVKLogo />} iconName="ShareVKLogo" />
 <IconWrapper icon={<ShareWhatsAppLogo />} iconName="ShareWhatsAppLogo" />
 <IconWrapper icon={<SplashArt />} iconName="SplashArt" />
 <IconWrapper icon={<StarArt />} iconName="StarArt" />
 <IconWrapper icon={<TelegramIcon />} iconName="TelegramIcon" />
 <IconWrapper icon={<TinkoffIcon />} iconName="TinkoffIcon" />
 <IconWrapper icon={<TriangleIcon />} iconName="TriangleIcon" />
 <IconWrapper icon={<TwitterIcon />} iconName="TwitterIcon" />
 <IconWrapper icon={<VisaIcon />} iconName="VisaIcon" />
 <IconWrapper icon={<VKIcon />} iconName="VKIcon" />
 <IconWrapper icon={<WalletIcon />} iconName="WalletIcon" />
 <IconWrapper icon={<WarnTriagleIcon />} iconName="WarnTriagleIcon" />
 <IconWrapper icon={<WhatsupIcon />} iconName="WhatsupIcon" />

    </table>
  );
};

