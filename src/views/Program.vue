<template>
  <div class="container">
    <div class="semesters" v-if="Object.keys(course).length">
      <div
        v-for="index in [...Array(course.length).keys()]"
        :key="index"
        v-html="`Semestr ${index + 1}`"
        :class="{ active: currentSemester === index }"
        @click="SetSemester(index)"
      />
    </div>
    <div class="course">
      <table>
        <tr class="headers">
          <th class="left title">Nazwa przedmiotu</th>
          <th>ECTS</th>
          <th>W</th>
          <th>C</th>
          <th>L</th>
          <th>Suma</th>
        </tr>

        <tr
          v-for="(item, idx) in semester"
          :key="idx"
          :class="{ spec: item.spec }"
          @click="item.select?.length ? Expand(idx, item.select) : Open()"
        >
          <td class="left">
            {{ item.name }}
            <ic
              v-if="item.select?.length && !item.expanded && !item.spec"
              icon="angles-down"
            />
            <ic
              v-if="item.select?.length && item.expanded && !item.spec"
              icon="angles-up"
            />
          </td>
          <td>{{ item.ects }}</td>
          <td>
            {{
              item.W ??
              (item.spec
                ? item.select.reduce((acc, curr) => acc + (curr.W ?? 0), 0)
                : 0)
            }}
          </td>
          <td>
            {{
              item.C ??
              (item.spec
                ? item.select.reduce((acc, curr) => acc + (curr.C ?? 0), 0)
                : 0)
            }}
          </td>
          <td>
            {{
              item.L ??
              (item.spec
                ? item.select.reduce((acc, curr) => acc + (curr.L ?? 0), 0)
                : 0)
            }}
          </td>
          <td class="sum">
            {{
              item.spec
                ? ''
                : (item.W ?? 0) +
                  (item.C ?? 0) +
                  (item.L ?? 0) +
                  (item.Hidden ?? 0)
            }}
            <ic
              v-if="item.select?.length && !item.expanded && item.spec"
              icon="angles-down"
            />
            <ic
              v-if="item.select?.length && item.expanded && item.spec"
              icon="angles-up"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import departments from '@/data'
export default defineComponent({
  data() {
    return {
      currentSemester: 0,
      course: departments
        .find((d) => d.id === this.$route.params.id)
        ?.majors.find((m) => m.id === this.$route.params.major)?.[
        this.$route.params.level == 'msc' ? 'msc' : 'bsc'
      ],
      semester: [] as any[],
    }
  },
  mounted() {
    if (this.course) {
      this.semester = (this.course[this.currentSemester] as any[]).sort(
        (a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
      )
    }
  },
  components: {},
  methods: {
    SetSemester(index: number) {
      this.currentSemester = index
      if (this.course) {
        this.semester = (this.course[this.currentSemester] as any[])
          .filter((item) => !item.spec)
          .sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          )
          .concat(
            ...(this.course[this.currentSemester] as any[]).filter(
              (item) => item.spec
            )
          )
      }
    },
    Expand(index: number, item: any) {
      if (this.semester[index].expanded) {
        this.semester.splice(index + 1, item.length)
      } else {
        this.semester.splice(
          index + 1,
          0,
          ...item.sort((a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
          )
        )
      }

      this.semester[index].expanded = !this.semester[index].expanded
    },
    Open() {
      alert('Otwórz przedmiot')
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  max-width: 1600px;
  margin: auto;
  margin-top: 100px;
}

.course {
  height: 60vh;
  display: flex;
}

.semesters {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;

  > div {
    padding: 10px 20px;
    background: $rose;
    color: $light;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &.active {
      box-shadow: 0 0 10px darken($rose, 20%);
    }
  }
}

table {
  width: 1000px;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  font-size: 17px;
  overflow: hidden;
  border-collapse: collapse;
  border: none;
}

td {
  padding: 15px 30px;
}

tr {
  background: $light;
  cursor: pointer;

  &:nth-child(even) {
    background: #f3f3f3;
  }
}

.spec {
  color: $light;
  background: $main !important;
  .sum {
    border-left: none;
  }
}

.left {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headers {
  background: $main;
  color: $light;
  font-weight: 600;
  > th {
    padding: 15px 30px;
    width: 100px;
    margin: 0;
  }

  .title {
    width: 600px;
  }
}

.sum {
  border-left: 2px solid $gray;
}
</style>
