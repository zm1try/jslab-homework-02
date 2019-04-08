export function isGood(user): boolean {
  const countOfAllTasks: number = user.list.length;
  const countOfIsDoneTasks: number = user.list.filter(item => item.isCompleted).length;
  return countOfAllTasks === countOfIsDoneTasks ? true : false;
}
