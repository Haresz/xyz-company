import { getDataTeams } from '@/api/teams';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: any = {
  teams: [],
};

const descriptions = [
  'At XYZ Company, we have a skilled and passionate team dedicated to innovation and excellence. Each member brings unique talents, fostering creativity and ingenuity in tackling challenges.',
  'Our team at XYZ Company is committed to delivering top-notch solutions with a focus on quality and customer satisfaction. We thrive on collaboration and continuous improvement.',
  'XYZ Company boasts a diverse team of experts who excel in their respective fields. Together, we drive progress and achieve remarkable results through teamwork and dedication.',
  'Innovation and excellence are at the core of XYZ Company. Our team members are not only skilled but also passionate about making a difference in the industry.',
  "At XYZ Company, our team is our greatest asset. Each member's unique skills and perspectives contribute to our collective success and innovation.",
  'The team at XYZ Company is driven by a shared vision of excellence and innovation. We work together to overcome challenges and achieve outstanding results.',
  "XYZ Company is home to a team of dedicated professionals who are committed to pushing the boundaries of what's possible. Our collaborative spirit fuels our success.",
  'At XYZ Company, we believe in the power of teamwork and innovation. Our team members bring diverse skills and perspectives, making us stronger together.',
  'Our team at XYZ Company is passionate about delivering exceptional results. We embrace challenges and work collaboratively to achieve our goals.',
  'XYZ Company is proud of its talented team, each member bringing unique strengths and a commitment to excellence. Together, we make a difference.',
  'At XYZ Company, our team is dedicated to continuous improvement and innovation. We work together to create solutions that make a real impact.',
  'The team at XYZ Company is a blend of creativity and expertise. We are committed to delivering high-quality solutions and exceeding expectations.',
  'XYZ Company thrives on the collective talents of its team members. We are passionate about innovation and dedicated to achieving excellence.',
  'At XYZ Company, our team is our strength. We collaborate, innovate, and strive for excellence in everything we do.',
  'Our team at XYZ Company is driven by a passion for innovation and a commitment to quality. We work together to achieve remarkable results.',
  'XYZ Company is built on the foundation of a talented and dedicated team. We embrace challenges and work collaboratively to drive success.',
];

const getRandomDescription = () => {
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const actionGetTeams = createAsyncThunk(
  'teams/actionGetTeams',
  async (qty: number) => {
    const response = await getDataTeams(qty);
    const dataWithDescription = response.data.results.map((team: any) => ({
      ...team,
      description: getRandomDescription(),
    }));
    return dataWithDescription;
  },
);

export const teamsSlice = createSlice({
  name: 'teamsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionGetTeams.fulfilled, (state, action) => {
      state.teams = action.payload;
    });
  },
});

export { actionGetTeams, initialState };
export default teamsSlice.reducer;
