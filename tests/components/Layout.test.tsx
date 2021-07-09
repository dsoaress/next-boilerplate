import { Layout } from '@/components/Layout'
import { render } from '@/lib/testUtils'

describe('<IndexPage />', () => {
  it('Renders IndexPage', () => {
    const { container } = render(<Layout />)

    expect(container).toMatchSnapshot()
  })
})
