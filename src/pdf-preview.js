import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  usePDF,
  PDFDownloadLink
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  box: {
    display: "flex"
  },
  one: {
    flex: "1 1 auto"
  },
  two: {
    flex: "1 1 auto"
  },

  three: {
    flex: "1 1 auto"
  },

  page: {
    // flexDirection: "row"
    // backgroundColor: "#9c9a7f"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  viewer: {
    width: "100%",
    height: "90vh"
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        render={({ pageNumber }) => (
          <View>
            <Text>
              <h1 style={{ backgroundColor: "red" }}>Hello world</h1>
            </Text>
          </View>
        )}
      />
    </Page>
  </Document>
);

const ViewDocument = () => (
  <PDFViewer style={styles.viewer}>
    <MyDocument />
  </PDFViewer>
);

const PdfPreview = () => {
  return (
    <>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>

      <ViewDocument />
    </>
  );
};

export default PdfPreview;
