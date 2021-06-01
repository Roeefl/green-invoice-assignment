<template>
  <div class="container">
    <img src="@/assets/user-page-background.jpg" alt="user-page-background" class="background" />
    <div class="content">
      <h2 class="title">
        כל המידע על המשתמש שלי:
      </h2>
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
  import moment from 'moment'
  import { startCase } from 'lodash'
  import { mapState } from 'vuex'

  const dateFormatter = (date) => moment(date * 1000).format('DD MMMM YYYY HH:MM:SS')

  const infoFields = [
    {
      key: 'id'
    },
    {
      key: 'email'
    },
    {
      key: 'firstName'
    },
    {
      key: 'lastName',
    },
    {
      key: 'signUpDate',
      formatter: dateFormatter
    },
    {
      key: 'activationDate',
      formatter: dateFormatter
    },
    {
      key: 'subscriptionExpirationDate',
      formatter: dateFormatter
    },
    {
      key: 'activeBusinessCount'
    }
  ]

  export default {
    name: 'UserInfo',
    computed: {
      ...mapState([
        'isAuthenticated',
        'user'
      ]),
      infoFields() {
        return infoFields
      },
      startCase() {
        return startCase
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

      .title {
        margin-bottom: $spacer * 2;
      }

      .info-grid {
        direction: ltr;
        border: 1px solid $primary;
        background: $white;
        box-shadow: 0 2px 4px $secondary;

        .field {
          margin-bottom: $spacer / 2;
          padding: $spacer;
          display: grid;
          grid-template-columns: 40% 60%;

          // &:nth-child(odd) {
          //   background: $secondary;
          // }
        }
      }
    }

    .logout-button {
      position: absolute;
      top: 0;
      left: 0;
      margin: $spacer;
    }
  }
</style>
