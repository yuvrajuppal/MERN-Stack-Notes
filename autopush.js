const git = require('simple-git')();

async function autoPush() {
    try {
        await git.add('.');
        await git.commit('Auto-commit from JS script');
        await git.push('origin', 'main'); // Change 'main' to your branch name
        console.log('Successfully pushed to remote!');
    } catch (err) {
        console.error('Failed to push:', err);
    }
}

autoPush();