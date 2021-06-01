<template>
  <div class="container">
    <page-illustration />
    <div class="content">
      <h2 class="title">
        כל המידע על המשתמש שלי:
      </h2>
      <h5 class="sorry">
        {{ sorry }}
      </h5>
      <ul class="info-grid">
        <li v-for="{ key, formatter = (value) => value } in infoFields" :key="key" class="field">
          <span className="key">
            {{ startCase(key) }}
          </span>
          <span className="value">
            {{ formatter(user[key]) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { startCase } from 'lodash'
  import { mapState } from 'vuex'
  import { userInfoFields } from '@/utils/userInfoFields'
  import PageIllustration from '@/components/PageIllustration'

  export default {
    name: 'UserInfo',
    components: {
      PageIllustration
    },
    computed: {
      ...mapState([
        'isAuthenticated',
        'user'
      ]),
      infoFields() {
        return userInfoFields
      },
      startCase() {
        return startCase
      },
      sorry() {
        return "(סליחה על הסטייה פתאום לאנגלית ועל הכיעור, אבל בשלב זה כבר לא נותר לי זמן להשקיע עוד קצת בגריד, וגם כך אני כבר באיחור בהגשה >_<)";
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => { 
        if (!vm.isAuthenticated) {
          vm.$router.push('/')
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  @import '@/styles/index';

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .content {
      margin: 5%;
      width: 40%;
      z-index: 10;

      .sorry {
        margin-bottom: $spacer * 2;
      }

      .info-grid {
        direction: ltr;
        background: $white;
        box-shadow: 0px 0px 60px 2px $secondary;

        .field {
          padding: $spacer;
          display: grid;
          grid-template-columns: 45% 55%;

          &:nth-child(odd) {
            background: $secondary;
          }
        }
      }
    }
  }
</style>
