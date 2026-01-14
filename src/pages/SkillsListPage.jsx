import { useState } from "react";
import { skillsLibrary } from "../data/skillsLibrary";

import SkillsList from "../components/SkillsList";

export default function SkillsListPage(){

    return (
        <div className="skills-page">
            <h2>Skills</h2>
            <SkillsList/>
        </div>
    )
}