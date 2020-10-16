<template>
  <b-row>
    <b-col>
      <div class="not-found-wrap text-center">
        <h1 class="text-60">
          404
        </h1>
        <p class="text-36 subheading mb-3">Error!</p>
        <p class="mb-5  text-muted text-18">
          Sorry! The page you were looking for doesn't exist.
        </p>
        <a class="btn btn-lg btn-primary btn-rounded" href="/"
          >Go back to home</a
        >
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "404 Not Found"
  }
};
</script>

