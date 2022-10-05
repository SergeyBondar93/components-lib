const baseStoriesTemplate = `
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

  const importString = \`import { \${iconName} } from "@cheaaa/icons/\${iconName}"\`;

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
      {__JSX__}
    </table>
  );
};

`;

const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('src');

const icons = files.filter(fileName => fileName.endsWith('.tsx')).map(fileName => fileName.replace('.tsx', ''));

const imports = icons.reduce((acc, iconName) =>  `${acc}import { ${iconName} } from "../src/${iconName}";\n` ,'')

const JSX = icons.reduce((acc, iconName) => `${acc} <IconWrapper icon={<${iconName} />} iconName="${iconName}" />\n`,'')

const disableEslint = '/* eslint-disable  */ \n'

const content = disableEslint + imports + baseStoriesTemplate.replace('{__JSX__}', JSX)

fs.writeFileSync(
    path.join('stories', 'Icons.stories.tsx'),
    content,
    'utf-8'
)