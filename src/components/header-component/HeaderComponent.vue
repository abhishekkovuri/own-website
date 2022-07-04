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
					<a
						class="nav-link"
						:class="[$route.path === '/' ? 'active' : '']"
						aria-current="page"
						href="/"
						>Home</a
					>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						:class="[$route.path === '/blogs' ? 'active' : '']"
						href="/blogs"
						>Blogs</a
					>
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

	.nav {
		.nav-link {
			color: #fff;
		}
		.active {
			background-color: #473d07;
			height: 40px;
		}
	}
}
</style>
