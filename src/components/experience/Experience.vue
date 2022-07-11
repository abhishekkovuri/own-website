<template>
	<section class="experience">
		<div class="present">
			<i
				class="fa fa-star color-gradient"
				aria-hidden="true"
				title="Current Company"
			>
			</i>
			<a href="https://www.thoughtworks.com/" target="_blank">
				<img
					class="present-logo"
					src="@/assets/tw-logo.jpeg"
					alt="thoughtworks logo"
					title="Thoughtworks India"
				/>
			</a>
		</div>
		<div class="past">
			<div class="exp">Past Companies</div>
			<a href="https://www.quinbay.com/" target="_blank">
				<img
					class="company-logo"
					src="@/assets/qb.jpeg"
					alt="Quinbay logo"
					title="Quinbay Technologies"
				/>
			</a>
			<a href="https://www.coviam.com/" target="_blank">
				<img
					class="company-logo"
					src="@/assets/coviam.jpeg"
					alt="coviam logo"
					title="Coviam Technologies"
				/>
			</a>
			<a href="https://www.persistent.com/" target="_blank">
				<img
					class="company-logo"
					src="@/assets/persistent.jpeg"
					alt="persistent logo"
					title="Persistent Systems"
				/>
			</a>
		</div>
	</section>
</template>

<style lang="scss">
.experience {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
	flex-wrap: wrap;
	position: relative;

	img {
		width: 50px;
		padding: 2px;
		border: 1px solid #999;
		border-radius: 10px;
	}

	.fa-star {
		position: absolute;
		top: -7px;
		left: -4px;
		font-size: 18px;
		// color: rgb(167, 167, 11);
	}

	.exp {
		position: absolute;
		top: -8px;
		left: 11px;
		font-size: 10px;
		background: white;
	}

	.past,
	.present {
		position: relative;
		display: flex;
		gap: 20px;
		border: 1px solid #999;
		border-radius: 10px;
		padding: 10px;
		justify-content: center;
		align-items: center;
		border: 1px solid #999;
	}
}
</style>
