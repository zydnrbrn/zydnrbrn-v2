import React from "react";

export default function Skill() {
    return(
        <>
            <div className="skill-section mt-6 mx-auto font-righteous">
                <h1 className="text-center text-3xl dark:text-white">Skills</h1>

                <div className="mx-auto mt-10 sm:columns-2 lg:flex dark:bg-white dark:rounded-lg">

                    <div className="skill-description sm:flex-initial">
                        <img className="h-320 w-560 lg:h-auto lg:w-auto" src="src/img/laravel-logo.png"
                             alt="Logo Laravel" />

                    </div>
                    <div className="skill-description">
                        <img className="h-320 w-560 sm:h-24 lg:h-auto lg:w-auto" src="src/img/language-logo.png.png"
                             alt="Logo Laravel" />
                    </div>
                </div>
            </div>
        </>
    )
}

interface SkillItem {
    label: string
    url: string
}

const SKILL_ITEMS: Array<SkillItem> = [
        {
            label: "Laravel",
            url: ""
        }

]
