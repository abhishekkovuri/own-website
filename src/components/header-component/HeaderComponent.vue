<template>
	<div class="header-wrapper background-gradient">
		<div>
			<img
				@click="() => $route.path !== '/' && $router.push('/')"
				class="logo pointer"
				:src="AK"
				alt="ak logo"
			/>
		</div>
		<div>
			<ul class="nav">
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/blogs">Blogs</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./header-component.js"></script>

<style lang="scss" scoped>
.header-wrapper {
	width: 100vw;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	font-weight: 900;

	.logo {
		width: 100px;
		height: 40px;
	}

	.nav-link {
		color: #fff;
	}
}
</style>
