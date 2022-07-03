<template>
	<div class="introduction">
		<div class="image-wrapper">
			<img src="@/assets/header.jpeg" alt="AK" width="200" height="250" />
			<div>
				Hi There!
				<br />
				I'm <b>Abhishek Kovuri</b> and I am a <b>UI developer @Thoughtworks</b>.
				<br />
				I’m inquisitive by nature and love exploring new technologies.
				<br />
				I have around 3+ years of experience in frontend domain.
				<br />
				I also enjoy writing blogs and love to share knowledge to everyone.
				<br />
				Outside of work I enjoy spending time with family and browsing.
				<br />
				I hail from Sangareddy, Telangana - 502001, INDIA
			</div>
		</div>
		<div class="link">
			<a
				href="https://www.linkedin.com/in/abhishek-kovuri-25101996/"
				target="_blank"
			>
				<img
					class="logo"
					src="@/assets/in.png"
					width="50"
					alt="linkedIn logo"
				/>
			</a>
			<a href="https://github.com/abhishekkovuri" target="_blank">
				<img class="logo" src="@/assets/git.png" width="50" alt="github logo" />
			</a>
			<a href="https://www.instagram.com/abhikovuri/" target="_blank">
				<img
					class="logo"
					src="@/assets/insta.png"
					width="50"
					alt="insta logo"
				/>
			</a>
			<a href="https://twitter.com/abhikovuri" target="_blank">
				<img
					class="logo"
					src="@/assets/twitter.png"
					width="50"
					alt="twitter logo"
				/>
			</a>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.introduction {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	.image-wrapper {
		display: flex;
		flex-direction: row;
		height: auto;
		justify-content: center;
		align-items: center;
		font-size: 20px;

		img {
			width: 250px;
			height: 250px;
			border-radius: 50%;
			object-fit: cover;
		}
	}
	.link {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
}

@media screen and (max-width: 768px) {
	.introduction {
		padding: 20px;
		.image-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			gap: 20px;
			img {
				width: 150px;
				height: 150px;
			}
		}
	}
}
</style>
