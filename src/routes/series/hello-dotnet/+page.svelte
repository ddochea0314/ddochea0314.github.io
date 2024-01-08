<script lang="ts">
    export let data;
</script>
<main>
    <div class="container mx-auto">
        <h1 class="text-lg text-pretty">개요</h1>
        {#each data.posts as post}
        <a href="./{post.path}" class="card m-4 p-4 shadow bg-base-100 w-full">
            <h2>{post.title}</h2>
            <p>{post.date}</p>
        </a>
        {/each}
    </div>
</main>