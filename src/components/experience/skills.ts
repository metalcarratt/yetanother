import { createStore } from 'vuex';

interface SkillsState {
    skills: string[]
}

const store = createStore<SkillsState>({
    state: {
        skills: []
    }
});

export default {
    store,
    getSkills: () => store.state.skills,
    hasSkill: (skillName : string) : boolean => store.state.skills.includes(skillName),
    addSkill: (skillName : string) => {
        if (!store.state.skills.includes(skillName)) {
            store.state.skills.push(skillName);
        }
    }
}