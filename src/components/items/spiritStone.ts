import { ItemType } from './itemType';
import skills from '../experience/skills';

const createSpiritStone = function() {
    return <ItemType>{
        type: 'Spirit Stone',
        actions: [
            {
                name: 'Investigate',
                condition: () => !skills.hasSkill('healing'),
                onclick: {
                    message: "The Spirit Stone seems to contain an ancient power capable of healing. Breathing while holding the stone also makes you feel lighter, stronger and faster.",
                    action: () => {
                        skills.addSkill('healing');
                        skills.addSkill('absorbing');
                    }
                }
            },
            {
                name: 'Heal',
                condition: () => skills.hasSkill('healing'),
                onclick: {

                }
            },
            {
                name: 'Absorb',
                condition: () => skills.hasSkill('absorbing'),
                onclick: {
                    
                }
            }
        ]
    }
}

export default createSpiritStone;