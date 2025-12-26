
export const getProgressMessage = (xp: number) => {
    if (xp >= 400) return "Almost there! Download resume to level up!";
    if (xp >= 300) return "Great progress! View all projects!";
    if (xp >= 200) return "Keep going! Connect on LinkedIn!";
    if (xp >= 100) return "Nice! Explore more experiences!";
    return "Start exploring to earn XP!";
  };