<template>
  <div class="app-container home1">
    <div class="home1Text">欢迎使用全品荐管理系统</div>
    <div class="version">v2.2.1{{huanjing}}</div>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        // 版本号
        version: "3.1.0",
		huanjing: process.env.VUE_APP_BASE_API=='http://service.xiaofeizzj.com:8011'?'正式':'测试'
      };
    },
    methods: {
      goTarget(href) {
        window.open(href, "_blank");
      },
    },
  };
</script>

<style scoped lang="scss">
  .home {
    blockquote {
      padding: 10px 20px;
      margin: 0 0 20px;
      font-size: 17.5px;
      border-left: 5px solid #eee;
    }

    hr {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 0;
      border-top: 1px solid #eee;
    }

    .col-item {
      margin-bottom: 20px;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    font-family: "open sans",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;
    font-size: 13px;
    color: #676a6c;
    overflow-x: hidden;

    ul {
      list-style-type: none;
    }

    h4 {
      margin-top: 0px;
    }

    h2 {
      margin-top: 10px;
      font-size: 26px;
      font-weight: 100;
    }

    p {
      margin-top: 10px;

      b {
        font-weight: 700;
      }
    }

    .update-log {
      ol {
        display: block;
        list-style-type: decimal;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 40px;
      }
    }
  }

  .home1 {
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home1Text {
    margin: auto;
    font-size: 36px;
  }
  .version {
    position: fixed;
    bottom: 40px;
    right: 40px;
    opacity: 0.5;
  }
</style>
