const issueText = process.env.ISSUE;

const textSplit = issueText.split(`
`);
const bugHandle = () => {};
const featureHandle = () => {};
if (textSplit[0] === "# BUG 提交") {
  bugHandle();
} else if (textSplit[0] === "# 功能请求") {
  featureHandle();
} else {
  console.log("ISSUE_CHECK_RESULT=unqualified");
  console.log("ISSUE_CHECK_REPLY=这不是一个BUG或者功能");
}
if (issueText.includes("问题描述")) {
  console.log("ISSUE_CHECK_RESULT=pass");
} else {
  console.log("ISSUE_CHECK_RESULT=unqualified");
}
