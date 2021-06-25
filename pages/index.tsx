const IndexPage = () => {}

export default IndexPage

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/app/home'
    }
  }
}
