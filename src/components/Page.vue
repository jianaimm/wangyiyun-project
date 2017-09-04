<template>
    <div class="pages">

            <div class="block">
                <span class="demonstration"></span>
                <el-pagination
                    layout="prev, pager, next"
                    :total="totalCount"
                    :page-size="limit"
                    :current-page="currentPage"
                    @current-change="handleCurrentPage"
                >
                </el-pagination>
            </div>
    </div>

</template>
<script>
    export default {
        name: 'pages',
        props: [
            'totalCount','limit','start','end'
        ],
        data(){
            return {
                currentPage: 1,//当前页
            }
        },
        methods: {
            handleCurrentPage(page){
//                console.log(`当前页${page}`)
                this.currentPage = page;

                this.$emit('update:start',(page - 1) * this.limit);
                this.$emit('update:end',page * this.limit);
            }
        }
    }
</script>
<style>
    .pages {
        padding: 20px 10px 50px;
        text-align: center;
    }
    .block {
        display: inline-block;
    }
</style>
