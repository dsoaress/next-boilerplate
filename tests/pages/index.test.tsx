import { render } from '@/lib/testUtils'
import IndexPage from '@/pages/index'

describe('<IndexPage />', () => {
  it('Renders IndexPage', () => {
    const { container } = render(<IndexPage />)

    expect(container).toMatchSnapshot()
  })
})
