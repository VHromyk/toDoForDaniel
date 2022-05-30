const isAuthentificated = state => state.auth.token;
const userName = state => state.auth.user.name;

const authSelectors = {
    isAuthentificated,
    userName,
};

export default authSelectors;