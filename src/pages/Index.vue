<template>
  <q-page class="q-pa-sm bg-grey-3 flex flex-center">
    <div class="col">
      <div class="text-h6">Program Design</div>
      <div class="q-my-md q-pa-md bg-white rounded-borders">
        <div class="q-my-sm row justify-between">
          <div class="col-6">
            <div>What's the title of your program?</div>
            <q-input outlined v-model="program.title" placeholder="Please enter the title of your program" dense/>
          </div>
          <div class="col-auto">
            <div>Start Date</div>
            <q-input @click="startDatePicker=true" outlined v-model="program.startDate" placeholder="E.g. 12/11/2021"
                     dense/>
            <q-dialog class="bg-white" v-model="startDatePicker">
              <q-card>
                <q-card-section>
                  <q-date v-model="program.startDate" mask="YYYY-MM-DD"/>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn label="ok" @click="startDatePicker=false"/>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
          <div class="col-auto">
            <div>End Date</div>
            <q-input @click="endDatePicker=true" outlined v-model="program.endDate" placeholder="E.g. 21/12/2021"
                     dense/>
            <q-dialog class="bg-white" v-model="endDatePicker">
              <q-card>
                <q-card-section>
                  <q-date v-model="program.endDate" mask="YYYY-MM-DD"/>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn label="ok" @click="endDatePicker=false"/>
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </div>
        <div class="q-my-md">
          <div>What issue you trying to solve?</div>
          <q-input outlined v-model="problemInput" placeholder="write problems and press enter"
                   v-on:keyup.enter="addItem(problemInput, program.problems)" dense/>
          <div class="flex q-gutter-xs">
            <q-item v-for="(problem, index) in program.problems" :key="index">
              <q-chip removable @remove="removeItem(index, program.problems)" color="grey-3" text-color="grey-9">
                {{ problem }}
              </q-chip>
            </q-item>
          </div>
        </div>
        <div class="q-my-md">
          <div>What are your goals for this problem?</div>
          <q-input outlined v-model="goalInput" placeholder="write goal and press enter"
                   v-on:keyup.enter="addGoal"
                   dense/>
          <div class="flex q-gutter-xs">
            <q-item v-for="(goal, index) in program.goals" :key="index">
              <q-chip removable @remove="removeItem(index, program.goals)" color="grey-3" text-color="grey-9">
                {{ goal.title }}
              </q-chip>
            </q-item>
          </div>
        </div>
      </div>
      <div class="text-h6">Outcome measurement Framework</div>
      <div class="q-my-md q-pa-md bg-white rounded-borders">
        <div class="text-blue-7 text-bold" style="font-size: 20px">Inputs</div>
        <div class="text-bold" style="font-size: 14px">what resource are available for this program?</div>
        <div class="q-mt-sm">
          <q-checkbox v-model="personnel" label="Personnel"/>
          <div v-if="personnel===true" class="q-my-md">
            <div>Which personnel will be in this program?</div>
            <q-input outlined v-model="personnelInput" placeholder="select personnel"
                     v-on:keyup.enter="addItem(personnelInput, program.inputs.personnel)"
                     dense/>
            <div class="flex q-gutter-xs">
              <q-item v-for="(item, index) in program.inputs.personnel" :key="index">
                <q-chip removable @remove="removeItem(index, program.inputs.personnel)" color="grey-3"
                        text-color="grey-9">
                  {{ item }}
                </q-chip>
              </q-item>
            </div>
          </div>
        </div>
        <div class="q-mt-sm">
          <q-checkbox v-model="funding" label="Funding"/>
          <div v-if="funding===true" class="q-my-md">
            <div>Add Funding source</div>
            <q-input outlined v-model="fundingInput" placeholder="select funding"
                     v-on:keyup.enter="addItem(fundingInput, program.inputs.funding)"
                     dense/>
            <div class="flex q-gutter-xs">
              <q-item v-for="(item, index) in program.inputs.funding" :key="index">
                <q-chip removable @remove="removeItem(index, program.inputs.funding)" color="grey-3"
                        text-color="grey-9">
                  {{ item }}
                </q-chip>
              </q-item>
            </div>
          </div>
        </div>
        <div class="q-mt-sm">
          <q-checkbox v-model="partnership" label="Partnership"/>
          <div v-if="partnership===true" class="q-my-md">
            <div>Which personnel will be in this program?</div>
            <q-input outlined v-model="partnershipInput" placeholder="select personnel"
                     v-on:keyup.enter="addItem(partnershipInput, program.inputs.partnership)"
                     dense/>
            <div class="flex q-gutter-xs">
              <q-item v-for="(item, index) in program.inputs.partnership" :key="index">
                <q-chip removable @remove="removeItem(index, program.inputs.partnership)" color="grey-3"
                        text-color="grey-9">
                  {{ item }}
                </q-chip>
              </q-item>
            </div>
          </div>
        </div>
        <div class="q-mt-sm">
          <q-checkbox v-model="others" label="Others"/>
          <div v-if="others===true" class="q-my-md">
            <div>Which personnel will be in this program?</div>
            <q-input outlined v-model="othersInput" placeholder="select personnel"
                     v-on:keyup.enter="addItem(othersInput, program.inputs.others)"
                     dense/>
            <div class="flex q-gutter-xs">
              <q-item v-for="(item, index) in program.inputs.others" :key="index">
                <q-chip removable @remove="removeItem(index, program.inputs.others)" color="grey-3" text-color="grey-9">
                  {{ item }}
                </q-chip>
              </q-item>
            </div>
          </div>
        </div>
      </div>
      <div class="q-my-md q-pa-md bg-white rounded-borders">
        <div class="text-blue-7 text-bold" style="font-size: 20px">Activities</div>
        <div class="text-bold" style="font-size: 14px">what are the activities you are planning to do in this program?
        </div>

        <div v-for="(activity, index) in sampleActivities" :key="index">
          <div class="flex q-gutter-sm">
            <q-checkbox v-model="program.activities" :val="activity" :label="activity"/>
          </div>
        </div>
      </div>
      <div class="q-my-md q-pa-md bg-white rounded-borders">
        <div class="text-blue-7 text-bold" style="font-size: 20px">Output</div>
        <div class="text-bold" style="font-size: 14px">what are you required to accomplish in this program?
        </div>
        <div class="q-mt-sm">Select your parameters (in number of x)</div>
        <q-input outlined v-model="parameterInput" placeholder="write and press your parameter"/>

      </div>
      <div class="q-my-md q-pa-md bg-white rounded-borders">
        <div class="text-blue-7 text-bold" style="font-size: 20px">Measure of Achievement</div>
        <div class="text-bold" style="font-size: 14px">How would you define your success?
        </div>
      </div>
      <div class="q-my-md q-pa-md bg-white rounded-borders">
        <div class="text-blue-7 text-bold" style="font-size: 20px">Outcome</div>
        <div class="text-bold" style="font-size: 14px">what are the intended outcomes of your program?</div>
        <q-list class="q-mt-sm">
          <div class="q-mt-md" v-for="(goal, index) in program.goals" :key="index">
            <diV class="text-red-8">
              Goal {{ index + 1 }}: {{ goal.title }}
            </diV>
            <div class="col">
              <q-checkbox v-model="goal.metGoal" label="Met our Goal"/>
            </div>
            <div class="col">
              <q-checkbox v-model="goal.didNotMetGoal" label="Met Not our Goal"/>
            </div>
          </div>
        </q-list>
      </div>
      <q-btn color="blue-8 text-grey-2" label="Submit" @click="submitForm"/>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      startDatePicker: false,
      endDatePicker: false,
      sampleActivities: ["Transportation", "Collect Funds", "Arrange Partner", "Recruitment", "Buy Food", "Medical Treatment", "Medicine Arrange"],
      personnel: false,
      funding: false,
      partnership: false,
      others: false,
      parameterInput: undefined,
      problemInput: '',
      goalInput: '',
      personnelInput: '',
      fundingInput: '',
      partnershipInput: '',
      othersInput: '',
      program: {
        title: '',
        startDate: '',
        endDate: '',
        problems: [],
        goals: [],
        activities: [],
        inputs: {
          personnel: [],
          funding: [],
          partnership: [],
          others: []
        },
        output: {}
      }
    }
  },
  methods: {
    clearInputFields() {
      this.goalInput = ''
      this.problemInput = ''
      this.personnelInput = ''
      this.fundingInput = ''
      this.partnershipInput = ''
      this.othersInput = ''
    },
    addItem(inputText$, list$) {
      list$.push(inputText$)
      this.clearInputFields()
    },
    removeItem(index$, list$) {
      list$.splice(index$, 1)
    },
    addGoal() {
      let goal = {}
      goal.title = this.goalInput
      goal.metGoal = false
      goal.didNotMetGoal = false
      this.program.goals.push(goal)
      this.goalInput = ''
    },
    submitForm() {
      console.log(this.program)
    },
  }
}
</script>
