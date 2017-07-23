<template>
    <div id="app">
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Brand</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">Auteurs<span class="sr-only">(current)</span></a></li>
                <li><a href="#">Articles</a></li>
                <li><a href="#">Link</a></li>
              </ul>
              <form class="navbar-form navbar-right">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
              </form>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
        <main class="view">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

export default {
    name: 'App',
    data () {
        return {

        }
    },
    components: {
    },
    computed : {
    },
    created() {
    },
    methods : {
    }
}
</script>

<style lang="less">
.view
{
    margin-top: 150px;
}
</style>
