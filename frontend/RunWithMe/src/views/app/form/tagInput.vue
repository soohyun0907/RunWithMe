<template>
  <div class="main-content">
    <breadcumb :page="'Tag Input'" :folder="'Forms'" />

    <b-row>
      <b-col md="12">
        <b-card title="Tag Inputs">
          <vue-tags-input
            v-model="tag"
            :tags="tags"
            class="tag-custom text-15"
            @tags-changed="newTags => (tags = newTags)"
            placeholder="+ add"
          />
        </b-card>
      </b-col>
      <b-col md="12" class="mt-4">
        <b-card title="Autocomplete">
          <vue-tags-input
            v-model="autocompleteTag"
            :tags="autocompleteTags"
            class="tag-custom text-15"
            :autocomplete-items="filteredItems"
            @tags-changed="newTags => (autocompleteTags = newTags)"
            placeholder="Type Country Name"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Tag Input"
  },
  data() {
    return {
      tag: "",
      tags: [
        {
          text: "Javascript"
        },
        {
          text: "Typescript"
        },
        {
          text: "add"
        }
      ],
      //   auto complete
      autocompleteTag: "",
      autocompleteTags: [
        {
          text: "Bangladesh"
        }
      ],

      autocompleteItems: [
        {
          text: "Spain"
        },
        {
          text: "France"
        },
        {
          text: "USA"
        },
        {
          text: "Germany"
        },
        {
          text: "China"
        }
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    }
  }
};
</script>
<style>
</style>
