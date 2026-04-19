import { Image, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";

const kartuIdentitas = () => {
  const dataDiri = {
    nama: "RONI",
    usia: 20,
    status: "WNI",
    pekerjaan: "Pelajar",
    alamat: "Bogor",
  };

  return (
    <View style={style.container}>
      <View style={style.kartu}>
        <View style={style.header}>
          <Image
            source={{
              uri: "https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=1200",
            }}
            style={style.img}
          ></Image>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>Nama</DataTable.Cell>
              <DataTable.Cell>:</DataTable.Cell>
              <DataTable.Cell>{dataDiri.nama}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Usia</DataTable.Cell>
              <DataTable.Cell>:</DataTable.Cell>
              <DataTable.Cell>{dataDiri.usia}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>Alamat</DataTable.Cell>
              <DataTable.Cell>:</DataTable.Cell>
              <DataTable.Cell>{dataDiri.alamat}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View style={style.isi}>
          <Text>
            Merupakan mahasiswa IBIK jurusan Teknologi Informasi yang tidak
            punya tujuan, skill? sama ga punya juga mweeeeee
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  kartu: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 25,
    borderRadius: 15,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  isi: {
    justifyContent: "center",
    padding: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default kartuIdentitas;
