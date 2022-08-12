import Table from "@editorjs/table";
import Tooltip from "editorjs-tooltip";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import editorjsCodeflask from "@calumk/editorjs-codeflask";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import AttachesTool from "@editorjs/attaches";
import NestedList from "@editorjs/nested-list";
import Underline from "@editorjs/underline";
import Checklist from "@editorjs/checklist";
import CodeTool from "@editorjs/code";

const TOOLS = {
  table: Table,
  tooltip: Tooltip,
  paragraph: Paragraph,
  list: List,
  warning: Warning,
  code: editorjsCodeflask,
  linkTool: LinkTool,
  image: Image,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  attachestool: AttachesTool,
  nestedList: NestedList,
  underline: Underline,
  checklist: Checklist,
  codeTool: CodeTool,
};

export default TOOLS;
