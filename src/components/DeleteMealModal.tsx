import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type DeleteMealModalProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function DeleteMealModal({
  visible,
  onCancel,
  onConfirm,
}: DeleteMealModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Delete Meal</Text>

          <Text style={styles.message}>
            Are you sure you want to delete this meal?
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={onConfirm}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  modal: {
    width: 280,
    backgroundColor: "#F2F2F7",
    borderRadius: 24,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },

  message: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
    marginBottom: 20,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },

  button: {
    flex: 1,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelButton: {
    backgroundColor: "#E5E7EB",
  },

  deleteButton: {
    backgroundColor: "#E5E7EB",
  },

  cancelText: {
    color: "#111827",
    fontSize: 16,
    fontWeight: "600",
  },

  deleteText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
});
