<template functional>
  <div
    class="folder-explorer-item"
    :class="{
      hidden: props.folder.hidden,
    }"
    @click="listeners.select()"
  >
    <VueIcon
      :icon="props.folder.isPackage ? 'folder' : 'folder_open'"
      class="folder-icon big"
    />
    <div class="folder-name">
      <div>
        {{ props.folder.name }}
      </div>
      <img
        v-if="props.folder.isVueProject"
        class="vue-ui-project-icon"
        src="~@/assets/logo-vue.png"
      />
      <img
        v-else-if="props.folder.isBorProject"
        class="vue-ui-project-icon"
        src="~@/assets/logo-react.png"
      />
    </div>
    <VueIcon v-if="props.folder.favorite" icon="star" class="favorite-icon" />
  </div>
</template>

<script>
export default {
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.folder-explorer-item
  padding $padding-item
  h-box()
  align-items center
  user-select none
  cursor pointer
  position relative

  &:hover
    background rgba($vue-ui-color-primary, .1)

  &.hidden
    opacity .5

  .folder-icon
    margin 0 4px
    >>> svg
      fill $vue-ui-color-primary

  .folder-name
    display flex
    flex 100% 1 1
    align-items center
    margin-left $padding-item
    ellipsis()

  .vue-ui-project-icon
    display block
    width 14px
    height @width
    margin-left 4px

  .favorite-icon
    >>> svg
      fill $vue-ui-color-primary
</style>
