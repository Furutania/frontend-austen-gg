


export function setSkillPillColorHelper(skill: string): string {
    let skillCssMap:  Map<string, string> = new Map<string, string>([
        ['Python', 'pill-language'],
        ['JavaScript', 'pill-language'],
        ['TypeScript', 'pill-language'],
        ['C', 'pill-language'],
        ['C++', 'pill-language'],
        ['Java', 'pill-language'],
        ['React', 'pill-framework'],
        ['Angular', 'pill-framework'],
        ['Rest API', 'pill-framework'],
        ['Node.js', 'pill-framework'],
        ['Unit Testing', 'pill-framework'],
        ['Fuzz Testing', 'pill-framework'],
        ['Python Flask', 'pill-framework'],
        ['Express.js', 'pill-framework'],
        ['RAG', 'pill-framework'],
        ['Relational Database', 'pill-framework'],
        ['Non-Relational Database', 'pill-framework'],
        ['AWS', 'pill-platform'],
        ['Docker', 'pill-platform'],
        ['OpenAI', 'pill-platform'],
        ['MongoDB', 'pill-platform'],
        ['mySQL','pill-platform'],
      ]);
      let cssType : string | undefined =  skillCssMap.get(skill);
    if(cssType === undefined){
      return 'pill-default';
    }
    return cssType;
}
