<template>
  <div v-if="proposals" class="proposals">
    <div v-if="proposals.length > 0">
      <nuxt-link v-for="proposal in proposals" :key="proposal.id" :to="'/proposals/'+proposal.id" class="box has-shadow-outside is-narrow">
        <div class="columns is-desktop is-gapless">
          <div class="has-text-weight-light column  is-9">
            <b v-if="proposal.title">
              <!-- <span v-if="proposal.vote_counts[1] != undefined && proposal.vote_counts[2] != undefined" @click="print(proposals.vote_counts)">
                <font-awesome-icon v-if="proposal.vote_counts[1].value > proposal.vote_counts[2].value" :icon="['fa', 'arrow-up']" style="font-size: 20px" class="has-text-success" />
                <font-awesome-icon v-else-if="proposal.vote_counts[1].value < proposal.vote_counts[2].value" :icon="['fa', 'arrow-down']" style="font-size: 20px" class="has-text-danger" />
                <font-awesome-icon v-else :icon="['fa', 'minus']" style="font-size: 20px"/>
              </span> -->
              <span v-if="proposal.vote_counts[1] != undefined && proposal.vote_counts[2] != undefined" class="icon">
                <img src="@/assets/img/up.svg" class="" v-if="proposal.vote_counts[1].value > proposal.vote_counts[2].value">
                <img src="@/assets/img/down.svg" class="" v-else-if="proposal.vote_counts[1].value < proposal.vote_counts[2].value">
                <img src="@/assets/img/empty.svg" class="" v-else>
              </span>
              <span v-else class="icon">
                <img src="@/assets/img/empty.svg" class="">
              </span>
              #{{ proposal.id }}: {{ proposal.title | truncate(60) }}</b>
            <b v-else>...</b>
            <div class="has-text-weight-light">
              <small v-if="Object.keys(proposal).includes('vote_status')" class="vote_indicator">
                <span :class="{'is-dark': proposal.vote_status === 0, 'is-danger': proposal.vote_status === 2, 'is-success': proposal.vote_status === 1}" :data-tooltip="'Your vote answer is: ' + voteTypes.find((vt) => vt.value === proposal.vote_status).fullName">
                  <font-awesome-icon :icon="['fas', 'check-square']" />
                </span>
              </small>
              <small>
                <div class="tag" v-if="proposal.cycle">C{{ proposal.cycle }}</div>
                <div class="tag" v-else>N/A</div>
              </small>
              <small class="mr-1">&nbsp;by <nuxt-link :to="'/account/'+proposal.author">{{ proposal.author }}</nuxt-link></small>
              <small><span v-for="(pay, index) in proposal.pay" :key="index"><span v-if="index > 0">,</span> {{ $wallet.formatNumber(parseInt(pay.field_0.quantity)) }} EFX</span></small>
            </div>
            <div class="has-text-weight-light">
              <small>Created On: {{proposal.pay[0]["field_1"].split("T")[0]}}</small><br>
              <small>Category: {{ categories[proposal.category]}}</small>
            </div>
          </div>
          <div class="column is-3 has-text-right">
            <div
            class="tag"
            :class="{'is-success': proposal.status == 'ACTIVE',
                     'is-warning': proposal.status == 'DRAFT',
                     'is-link': proposal.status == 'PENDING',
                     'is-dark': proposal.status == 'CLOSED'}">
              {{ proposal.status }}
            </div>
            <span class="tag is-info" v-if="proposal.msig">⚡ ATP</span>
          </div>
        </div>
      </nuxt-link>
    </div>
    <h5 v-else class="has-text-centered subtitle">
      No Proposals
    </h5>
  </div>
</template>
<script>
export default {
  props: ['proposals'],
  data () {
    return {
      voteTypes: [
        {
          value: 1,
          name: 'Y',
          fullName: 'Yes'
        },
        {
          value: 0,
          name: 'A',
          fullName: 'Abstain'
        },
        {
          value: 2,
          name: 'N',
          fullName: 'No'
        }
      ],
      categories: {
        0: 'Governance',
        1: 'Marketing',
        2: 'Design',
        3: 'Technical',
        4: 'Other',
        5: 'Sentiment',
        6: 'Grant Request',
        7: 'Cycle Budget',
        8: 'Network Fees',
        9: 'Smart Contract Updates'
      }
    }
  },
  methods: {
    print (x) {
      console.log(x)
    }
  }
}
</script>
<style lang="scss" scoped>
  .proposals {
    .media-left {
      min-width: 72px;
    }
  }
  .vote-result {
    //margin-right: 10px;
    &:after {
      content: " - "
    }
    &:last-of-type:after {
      //margin-right:0;
      content: ""
    }
  }
  .media {
    flex-wrap: wrap;
  }
  .icon {
    height: 23px;
    width: 40px;
  }
  small.vote_indicator {
    margin-left: 14px;
  }
</style>
