<template>
	<section class="introduction">
		<div class="image-wrapper">
			<img src="@/assets/header.jpeg" alt="AK" width="200" height="250" />
			<div>
				Hi There!
				<br />
				I'm <b>Abhishek Kovuri</b> and I am a <b>UI developer @Thoughtworks</b>.
				<br />
				I have around {{ moment().year() - 2019 }}+ years of experience in
				frontend domain.
				<br />
				I’m inquisitive by nature and love exploring new technologies.
				<br />
				I also enjoy writing blogs and love to share my knowledge to everyone.
				<br />
				Outside of work, I enjoy spending time with family and browsing.
				<br />
				I hail from Sangareddy, Telangana - 502001, India
			</div>
		</div>
		<div>
			<Experience />
		</div>
		<div>
			<ProfileLink />
		</div>
	</section>
</template>
<script src="./home"></script>
<style lang="scss" scoped>
.introduction {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
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
