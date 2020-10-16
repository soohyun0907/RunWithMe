<template>
  <div class="main-content">
    <breadcumb :page="'Vue Good Table'" :folder="'Datatables'" />
    <!-- <div class="wrapper"> -->
    <vue-good-table
      :columns="columns"
      :line-numbers="true"
      :search-options="{
        enabled: true,
        placeholder: 'Search this table'
      }"
      :pagination-options="{
        enabled: true,
        mode: 'records'
      }"
      styleClass="tableOne vgt-table"
      :selectOptions="{
        enabled: true,
        selectionInfoClass: 'table-alert__box'
      }"
      :rows="rows"
    >
      <div slot="table-actions" class="mb-3">
        <b-button variant="primary" class="btn-rounded">
          Add Button
        </b-button>
      </div>

      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'button'">
          <a href="">
            <i class="i-Eraser-2 text-25 text-success mr-2"></i>
            {{ props.row.button }}</a
          >
          <a href="">
            <i class="i-Close-Window text-25 text-danger"></i>
            {{ props.row.button }}</a
          >
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Task Manager"
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name"
        },
        {
          label: "Span",
          field: "span",
          html: true
        },
        {
          label: "Created On",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "MMM Do yy"
        },
        {
          label: "Percent",
          field: "score",
          type: "percentage"
        },
        {
          label: "Button",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right"
        }
      ],
      rows: [
        {
          id: 1,
          name: "John",
          span: '<span class="badge badge-primary">Primary</span>',
          createdAt: "2019-10-29",
          score: 0.03343
        },
        {
          id: 2,
          name: "Jane",
          span: '<span class="badge badge-danger">Primary</span>',
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 3,
          name: "Susan",
          span: '<span class="badge badge-warning">Primary</span>',
          createdAt: "2011-10-30",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          span: '<span class="badge badge-primary">Primary</span>',
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          span: '<span class="badge badge-danger">Primary</span>',
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 6,
          name: "John",
          span: '<span class="badge badge-success">success</span>',
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 1,
          name: "John",
          span: '<span class="badge badge-warning">Warning</span>',
          createdAt: "2019-10-29",
          score: 0.03343
        },
        {
          id: 2,
          name: "Jane",
          span: '<span class="badge badge-info">Info</span>',
          createdAt: "2011-10-31",
          score: 0.03343
        },
        {
          id: 3,
          name: "Susan",
          span: '<span class="badge badge-dark">Dark</span>',
          createdAt: "2011-10-30",
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          span: '<span class="badge badge-warning">Warning</span>',
          createdAt: "2011-10-11",
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          span: '<span class="badge badge-info">Info</span>',
          createdAt: "2011-10-21",
          score: 0.03343
        },
        {
          id: 6,
          name: "John",
          span: '<span class="badge badge-primary">Primary</span>',
          createdAt: "2011-10-31",
          score: 0.03343
        }
      ]
    };
  },
  methods: {
    addFile() {
      console.log("hello");
    }
  }
};
</script>
<style >

</style>
