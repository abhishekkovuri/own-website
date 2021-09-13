<template>
    <div class="blog-list-wrapper">
        <div class="model-wrapper">
            <div class="image-wrapper">
                <img src="@/assets/header.jpeg" alt="AK" width="200" height="250">
            </div>
            <div class="title-text color-gradient"> Abhishek Kovuri</div>
        </div>
        <div class="blog color-gradient">
            My Blogs
        </div>
        <div class="blog-content">
            <div v-if="getPostsList.length">
                <div class="blog-card-wrapper">
                    <div
                        class="blog-card pointer"
                        v-for="(post, index) of getPostsList"
                        :key="index">
                        <a :href="post.link" class="link">
                            <div class="blog-category">
                                <span class="bullet"><em class="fa fa-circle"></em></span>
                                <!-- {{Object.values(post.categories.slice(0,1)).toString().toUpperCase() | stringReplace}} -->
                                {{"Javascript, FrontEnd".toString() | stringReplace}}
                            </div>
                            <div>
                                <img class="logo thumbnail-img" :src="post.thumbnail" alt="post image">
                            </div>
                            <div
                                class="blog-title"
                                :title="post.title">
                                {{post.title}}
                            </div>
                            <div class="blog-date">
                                {{moment(post.pubDate).fromNow()}}
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div
                class="no-data"
                v-else>
                No Data for the selected Category
            </div>
        </div>
    </div>
</template>

<script src="./blog-list.js"></script>

<style lang="scss" scoped>
.blog {
    margin: 10px 35px 0px;
    font-size: 20px;
}

.model-wrapper {
    position: relative;

    .title-text {
        font-weight: 900;
        font-size: 32px;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }

    .image-wrapper {
        display: flex;
        justify-content: center;

        img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
}

a {
    color: inherit;
    text-decoration: inherit;
}

.blog-content {
    padding: 25px;
    box-sizing: border-box;
    margin-bottom: 20px;

    .blog-card-wrapper {
        display: flex;
        justify-content: flex-start;
        flex-flow: row wrap;
        gap: 40px;

        .blog-card {
            border: 1px solid #999;
            border-radius: 10px;
            height: 250px;
            width: 250px;
            padding: 10px;
            position: relative;
        }

        .bullet {
            color: rgb(224, 196, 37)
        }

        .blog-title {
            margin: 5px 0px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        .blog-description {
            margin-top: 5px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 10;
            -webkit-box-orient: vertical;
        }

        .blog-date {
            position: absolute;
            bottom: 10px;
            color: #999;
            font-size: 14px;
        }
    }

    .no-data {
        margin: 10%;
        text-align: center;
    }

    .thumbnail-img {
        margin-top: 5px;
        width: 250px;
        height: 150px
    }
}
</style>
