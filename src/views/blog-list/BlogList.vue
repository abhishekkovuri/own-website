<template>
	<section class="content">
		<div class="cards" v-if="getPostsList.length">
			<div class="card" v-for="(post, index) of getPostsList" :key="index">
				<div>
					<img
						class="logo thumbnail-img"
						:src="post.thumbnail"
						alt="post image"
					/>
				</div>
				<div class="details">
					<div class="blog-title pointer" :title="post.title">
						{{ post.title }}
					</div>
					<div class="description">
						{{ post.description | replaceTags }}
					</div>
					<div>
						<a
							class="individual-link pointer"
							:href="post.link"
							target="_blank"
						>
							read more..</a
						>
					</div>
					<div class="blog-categories">
						<span v-for="category of post.categories" :key="category">
							#{{ category }}
						</span>
					</div>
					<div class="blog-date">
						Published {{ moment(post.pubDate).add(330, 'minutes').fromNow() }}
					</div>
				</div>
			</div>
			<div class="more">
				For more blogs please
				<a class="link" :href="mediumLink" target="_blank">click here</a>
			</div>
		</div>
	</section>
</template>

<script src="./blog-list.js"></script>

<style lang="scss" scoped>
.content {
	display: flex;
	justify-content: center;
	width: 70vw;
	gap: 10px;

	.cards {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: auto;
	}

	.card {
		display: flex;
		flex-direction: row;
		gap: 20px;
		border: 1px solid #999;
		border-radius: 20px;
		padding: 20px;
	}

	.details {
		display: flex;
		flex-direction: column;
		font-size: 14px;

		.description {
			text-overflow: ellipsis;
			overflow: hidden;
			display: -webkit-box !important;
			-webkit-line-clamp: 7;
			-webkit-box-orient: vertical;
			white-space: normal;
		}
		.blog-title {
			font-size: 24px;
			text-decoration: underline;
		}
		.blog-categories {
			font-size: 18px;
			font-weight: 500;
			margin-right: 10px;
			color: #806E01;
		}
		.blog-date {
			font-size: 18px;
			font-weight: 500;
		}
	}

	.more {
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		margin-bottom: 50px;
	}

	.thumbnail-img {
		margin-top: 5px;
		width: 350px;
		height: 250px;
	}

	.individual-link {
		float: right;
	}
}

@media screen and (max-width: 1168px) {
	.content {
		.cards {
			.card {
				display: flex;
				flex-direction: column;
				gap: 20px;
				border: 1px solid #999;
				border-radius: 20px;
				padding: 20px;
				width: 70vw;
			}
			.details {
				display: flex;
				flex-direction: column;
				font-size: 10px;

				.description {
					text-overflow: ellipsis;
					overflow: hidden;
					display: -webkit-box !important;
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
					white-space: normal;
				}

				.blog-title {
					font-size: 14px;
					text-decoration: underline;
				}
				.blog-categories {
					font-size: 12px;
					font-weight: 500;
					color: #806E01;
				}
				.blog-date {
					font-size: 10px;
					font-weight: 500;
				}
			}
			.individual-link {
				float: none;
				display: flex;
				justify-content: left;
			}
		}
		.more {
			font-size: 10px;
			font-weight: 500;
			text-align: center;
		}

		.thumbnail-img {
			margin-top: 5px;
			width: 100%;
			height: 210px;
		}
	}
}
</style>
