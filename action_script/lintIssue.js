const issueText = process.env.ISSUE;

const textSplit = issueText
  .split(
    `
`
  )
  .map((str) => str.replace("\r", ""));
const bugHandle = () => {
  // 缺少错误描述
  const desIndex = textSplit.indexOf("## 描述该错误");
  if (desIndex === -1) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少错误描述");
    return;
  }
  const repeatIndex = textSplit.indexOf("## 复现");
  if (repeatIndex === -1) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少复现步骤");
    return;
  }
  const desContent = textSplit
    .slice(desIndex + 1, repeatIndex)
    .join("")
    .replaceAll(" ", "");
  if (!desContent) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少错误描述");
    return;
  }
  // 缺少复现步骤
  const runResultIndex = textSplit.indexOf("## 运行结果");
  if (runResultIndex === -1) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少运行结果");
    return;
  }
  const repeatContent = textSplit
    .slice(repeatIndex + 1, runResultIndex)
    .join("")
    .replaceAll(" ", "");
  // console.log(repeatContent.split(/[0-9]\. /), "repeatContent.split(/[0-9]\. /)");
  if (!repeatContent) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少复现步骤");
    return;
  }
  // 运行结果
  const envIndex = textSplit.indexOf("## 运行环境信息");
  if (envIndex === -1) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少运行环境信息");
    return;
  }
  const resContent = textSplit
    .slice(runResultIndex + 1, envIndex)
    .join("")
    .replaceAll(" ", "");
  if (!resContent) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少运行结果");
    return;
  }
  // 运行环境信息
  const otherIndex = textSplit.indexOf("## 其他") || textSplit.length + 1;
  const envContent = textSplit.slice(envIndex + 1, otherIndex);
  const envReg = /\[\e\.\g\..{5,}\]/;
  let hasDevice = false;
  let hasOS = false;
  let hasBrowser = false;
  let hasVersion = false;
  let errMsg = "";
  envContent.forEach((str) => {
    if (str.match(envReg)) {
      if (str.includes("Device")) {
        hasDevice = true;
      } else if (str.includes("OS")) {
        hasOS = true;
      } else if (str.includes("Browser")) {
        hasBrowser = true;
      } else if (str.includes("Version")) {
        hasVersion = true;
      }
    }
  });

  if (!hasDevice) {
    errMsg += "缺少设备名称;";
  } else if (!hasOS) {
    errMsg += "缺少操作系统名称;";
  } else if (!hasBrowser) {
    errMsg += "缺少浏览器名称;";
  } else if (!hasVersion) {
    errMsg += "缺少浏览器版本;";
  }
  if (errMsg) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=" + errMsg);
  } else {
    console.log("ISSUE_CHECK_RESULT=pass");
  }
};

const featureHandle = () => {
  // 缺少错误描述
  const desIndex = textSplit.indexOf("## 你期望添加什么样的功能?");
  const desContent = textSplit
    .slice(desIndex + 1, textSplit.length)
    .join("")
    .replaceAll(" ", "")
    .replaceAll("\n", "");
  if (desIndex === -1 || desIndex === textSplit.length - 1 || !desContent) {
    console.log("ISSUE_CHECK_RESULT=unqualified");
    console.log("ISSUE_CHECK_REPLY=缺少功能描述");
    return;
  } else {
    console.log("ISSUE_CHECK_RESULT=pass");
  }
};
if (textSplit[0] === "# BUG 提交") {
  console.log("ISSUE_CHECK_TYPE=BUG");
  bugHandle();
} else if (textSplit[0] === "# 功能请求") {
  console.log("ISSUE_CHECK_TYPE=FEATRUE");
  featureHandle();
} else {
  console.log("ISSUE_CHECK_RESULT=unqualified");
  console.log("ISSUE_CHECK_REPLY=这不是一个BUG或者功能请求");
}
