module.exports = {
    format: "{type}{scope}: {subject}",
    list: [
        "build",
        "chore",
        "ci",
        "conflict",
        "delete",
        "docs",
        "downgrade",
        "feat",
        "fix",
        "font",
        "lint",
        "perf",
        "refactor",
        "release",
        "revert",
        "stash",
        "style",
        "test",
        "upgrade",
        "wip",
    ],
    maxMessageLength: 128,
    minMessageLength: 3,
    questions: [
        "type",
        "scope",
        "subject",
        "body",
        "breaking",
        "issues",
        "lerna",
    ],
    scopes: [],
    types: {
        build: {
            description:
                "影响构建系统或外部依赖项的更改(示例范围:gulp、broccoli、npm)",
            value: "build",
        },
        revert: {
            description: "回退历史版本",
            value: "revert",
        },
        conflict: {
            description: "修改冲突",
            value: "conflict",
        },
        font: {
            description: "字体文件更新",
            value: "font",
        },
        delete: {
            description: "删除文件",
            value: "delete",
        },
        stash: {
            description: "暂存文件",
            value: "stash",
        },
        wip: {
            description: "work in progress",
            value: "wip",
        },
        chore: {
            description: "除源码目录或测试文件以外的修改",
            value: "chore",
        },
        ci: {
            description:
                "对CI配置文件和脚本的更改(示例范围:Travis, Circle, BrowserStack, SauceLabs)",
            value: "ci",
        },
        docs: {
            description: "文档增删改",
            value: "docs",
        },
        feat: {
            description: "一个新功能",
            value: "feat",
        },
        fix: {
            description: "一个 bug",
            value: "fix",
        },
        perf: {
            description: "性能优化",
            value: "perf",
        },
        refactor: {
            description: "既不修复 bug 也不添加新功能的更改",
            value: "refactor",
        },
        release: {
            description: "创建一个 release",
            value: "release",
        },
        style: {
            description: "样式修改(空白、格式、缺少分号等)",
            value: "style",
        },
        test: {
            description: "增加测试",
            value: "test",
        },
        lint: {
            description: "修复 lint 警告",
            value: "lint",
        },
        upgrade: {
            description: "依赖更新",
            value: "upgrade",
        },
        downgrade: {
            description: "依赖降级",
            value: "downgrade",
        },
    },
};
