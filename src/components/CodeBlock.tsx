import { CopyBlock, vs2015 } from "react-code-blocks";

interface Props {
  code: string;
  "client:load": boolean;
}

export default function CodeBlock({ code }: Props) {
  return (
    <div className="code-block">
      <CopyBlock
        // @ts-ignore
        text={code}
        language={"tsx"}
        showLineNumbers
        theme={vs2015}
        wrapLines
      />
    </div>
  );
}
