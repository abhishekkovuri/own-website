<template>
	<div class="wrapper">
		<header>
			<HeaderComponent />
		</header>
		<main class="content">
			<router-view />
		</main>
		<footer>
			<Footer />
		</footer>
		<div class="mask" v-if="getLoader">
			<div class="align-center">
				<Loader />
			</div>
		</div>
	</div>
</template>

<script src="./app.js"></script>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
}

header,
footer {
	display: flex;
	height: 40px;
	z-index: 10;
	position: fixed;
	width: 100vw;
}

header {
	top: 0;
}

footer {
	bottom: 0;
}

main {
	display: flex;
	flex: 1;
	justify-content: center;
	margin: 50px auto;
}

.wrapper {
	height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
}

@media screen and (max-width: 768px) {
	main {
		display: flex;
		flex: 1;
		justify-content: center;
		margin: 15% auto;
	}
}
</style>
