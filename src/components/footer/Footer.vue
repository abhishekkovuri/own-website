<template>
    <div class="footer-wrapper">
        <div>
            © Abhishek Kovuri
        </div>
        <div class="link">
            <a href="https://www.linkedin.com/in/abhishek-kovuri-25101996/" target="_blank">
                <img class="logo" src="@/assets/in.png" width="20" alt="linkedIn logo">
            </a>
            <a href="https://github.com/abhishekkovuri" target="_blank">
                <img class="logo" src="@/assets/git.png" width="20" alt="github logo">
            </a>
            <a href="https://www.instagram.com/abhikovuri/" target="_blank">
                <img class="logo" src="@/assets/insta.png" width="20" alt="insta logo">
            </a>
            <a href="https://twitter.com/abhikovuri" target="_blank">
                <img class="logo" src="@/assets/twitter.png" width="20" alt="twitter logo">
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.footer-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    background-image: linear-gradient(to right, rgb(138, 84, 4), rgb(224, 196, 37));
    width: 100vw;
    height: 40px;
    color: rgb(0, 0, 0);
    font-size: 16px;

    .link {
        display: flex;
        gap: 20px;
        margin-top: 10px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }

}
</style>
