<template>
  <div class="container">
    <div class="content">
      <h1>
        כל המידע על המשתמש שלי:
      </h1>
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
    align-items: center;
    position: relative;

    .info-grid {
      direction: ltr;
      border: 1px solid $primary;

      .field {
        margin-bottom: $spacer / 2;
        padding: $spacer;
        display: grid;
        grid-template-columns: 40% 60%;

        &:nth-child(odd) {
          background: $secondary;
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
