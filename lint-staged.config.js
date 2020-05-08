/**
 * https://www.worldlink.com.cn/en/osdir/lint-staged.html
 */
module.exports = {
    "(test).ts": [
        "vue-cli-service lint",
        "git add"
    ],
    "*.vue": [
        "vue-cli-service lint",
        "git add"
    ]
}