// get all repositories from github api
export const getAllRepositories = async () => {
    const response = await fetch(`https://api.github.com/users/Nakatox/repos?sort=updated`);
    const data = await response.json();
    return data;
}