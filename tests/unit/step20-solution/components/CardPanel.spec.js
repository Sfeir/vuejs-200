import VueMaterial from 'vue-material';
import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import CardPanel from '@/pages/step20/components/CardPanel.vue';

const person = {
  photo: null,
  firstname: 'John',
  lastname: 'Deuf',
  entity: null,
  email: 'deuf.j@sfeir.com',
  phone: '0123456789',
  manager: 'Cyril Balit',
  id: 1234
};
const localVue = createLocalVue();
localVue.use(VueMaterial);

describe("CardPanel", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CardPanel, {
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        person,
      }
    });
  });

  it('renders the person passed as props', () => {
    const html = wrapper.text();

    expect(html).toMatch('John');
    expect(html).toMatch('Deuf');
    expect(html).toMatch('deuf.j@sfeir.com');
  });

  it('sets a default picture if none is present', () => {
    expect(wrapper.vm.photoUrl).toEqual('https://randomuser.me/api/portraits/lego/6.jpg');
  });

  it('emits a delete event', () => {
    wrapper.find('.a--delete-person').trigger('click');
    expect(wrapper.emitted().delete[0]).toEqual([person]);
  });

  it('filters the person entity', () => {
    expect(wrapper.text()).toMatch('N/A');
  });
});