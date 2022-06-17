let common = require("_common.js")

common.log("肥腙大战魔界小脚本")

skill_x_list = [250, 560, 880, 1200]
skill_y = 2738
wait_seconds = 0.5

while (true) {
    for (let idx = 1; idx <= skill_x_list.length; ++idx) {
        skill_x = skill_x_list[idx-1]

        common.log( "双击第 " + idx + " 个技能，然后等待 " + wait_seconds + " 秒")
        click(skill_x, skill_y)
        click(skill_x, skill_y)
        sleep(wait_seconds * 1000)
    }
}
