import create from 'zustand';

interface States {
  formList: {
    id: string;
    content: string;
  }[];
  count: number;
}

interface Actions {
  setFormList: (newFormList: any, newCount: number) => void;
}

const useFormStore = create<States & Actions>((set) => ({
  // States
  formList: [
    { id: 'form-1', content: 'item-1' },
    { id: 'form-2', content: 'item-2' },
    { id: 'form-3', content: 'item-3' },
  ],
  count: 3,

  // Actions
  setFormList: (newFormList, newCount) =>
    set(() => ({
      formList: newFormList,
      count: newCount,
    })),
}));

export default useFormStore;
